import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { siteConfig } from "@/lib/site-config";

type Post = { image: string; permalink: string; alt: string };

const PROFILE_URL = siteConfig.social.instagram || "https://www.instagram.com/nodewayagency/";
const HANDLE = "@" + PROFILE_URL.replace(/\/$/, "").split("/").pop();

/**
 * Reserva: posts reais salvos em /public/instagram. Aparecem quando não há token
 * ou quando a API do Instagram falha, então a faixa nunca fica vazia.
 */
const fallbackPosts: Post[] = [
  {
    image: "/instagram/apresentacao.webp",
    permalink: "https://www.instagram.com/p/Def-hO7kUB_/",
    alt: "Post: Tecnologia que se adapta ao seu processo, não o contrário",
  },
  {
    image: "/instagram/case-etiquetas.webp",
    permalink: "https://www.instagram.com/p/DfCppwTkYYi/",
    alt: "Post: case de orçamento de etiquetas, de horas para segundos",
  },
  {
    image: "/instagram/processo.webp",
    permalink: "https://www.instagram.com/p/DfUrOuFkYGy/",
    alt: "Post: antes do código, o seu negócio",
  },
  {
    image: "/instagram/crm.webp",
    permalink: "https://www.instagram.com/p/De1xu-yEfi0/",
    alt: "Post: sua empresa inteira na palma da mão com o Nodeway CRM",
  },
];

type ApiMedia = {
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
};

/**
 * Últimos posts pela API oficial do Instagram (Instagram API with Instagram Login).
 * Precisa da variável INSTAGRAM_ACCESS_TOKEN (token de longa duração, vale 60 dias).
 * Atualiza no máximo 1x por hora. Mostra só as imagens: sem seguidores nem curtidas.
 */
async function getPosts(limit: number): Promise<Post[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return fallbackPosts.slice(0, limit);
  try {
    const url = new URL("https://graph.instagram.com/me/media");
    url.searchParams.set("fields", "media_type,media_url,thumbnail_url,permalink,caption");
    url.searchParams.set("limit", String(limit + 4));
    url.searchParams.set("access_token", token);
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`Instagram API ${res.status}`);
    const json = (await res.json()) as { data?: ApiMedia[] };
    const posts = (json.data ?? [])
      .map((m) => ({
        image: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
        permalink: m.permalink,
        alt: m.caption ? `Post: ${m.caption.split("\n")[0].slice(0, 120)}` : "Post da Nodeway no Instagram",
      }))
      .filter((p) => p.image)
      .slice(0, limit);
    return posts.length ? posts : fallbackPosts.slice(0, limit);
  } catch (err) {
    console.error("[instagram-strip]", err);
    return fallbackPosts.slice(0, limit);
  }
}

type Props = {
  /** Quantos posts mostrar (padrão 4). */
  limit?: number;
  className?: string;
};

export async function InstagramStrip({ limit = 4, className = "" }: Props) {
  const posts = await getPosts(limit);

  return (
    <section className={`px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <InstagramIcon className="w-4 h-4 text-primary" />
            {HANDLE}
          </p>
          <h2 className="text-2xl lg:text-3xl font-display text-foreground">
            Acompanhe a Nodeway no Instagram
          </h2>
          <p className="text-muted-foreground mt-2">
            Cases, bastidores e dicas para tirar a operação da planilha.
          </p>
        </div>
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-border bg-card/60 text-foreground font-medium hover:border-primary/50 hover:text-primary transition-colors shrink-0"
        >
          <InstagramIcon className="w-4 h-4" />
          Seguir no Instagram
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {posts.map((p) => (
          <a
            key={p.permalink}
            href={p.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-border/80 bg-card aspect-[4/5]"
          >
            <Image
              src={p.image}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 260px, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              unoptimized={p.image.startsWith("http")}
            />
            <span className="absolute right-2.5 top-2.5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
