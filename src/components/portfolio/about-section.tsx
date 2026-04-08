import { Disc3, Gamepad2 } from 'lucide-react'
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'

import aboutProfile from '@/assets/about-profile.jpg'
import { FadeInView } from '@/components/fade-in-view'

export function AboutSection() {
  return (
    <section
      className="mx-auto w-full max-w-[1600px] px-4 py-18 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      aria-labelledby="about-heading"
    >
      <FadeInView>
      <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:gap-20">
        <div className="space-y-6">
          <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-border/70 bg-muted/20 p-2.5 shadow-xs sm:mx-0">
            <div className="overflow-hidden rounded-[1.4rem] bg-muted">
              <img
                src={aboutProfile}
                alt="Foto de perfil de Gabriel Rodrigues Torres"
                width={360}
                height={360}
                decoding="async"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground sm:text-xs">
              Contato
            </p>
            <div className="grid gap-3">
              <a
                href="https://github.com/nerfaslol"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-muted/20"
              >
                <div className="flex items-center gap-3 text-foreground">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-muted/30 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    <FaGithub className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      GitHub
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      /nerfaslol
                    </p>
                  </div>
                </div>
              </a>

              <div className="flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3">
                <div className="flex items-center gap-3 text-foreground">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-muted/30">
                    <FaDiscord className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Discord
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      nerftwitch
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.instagram.com/solarizx/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3 transition-colors hover:border-primary/30 hover:bg-muted/20"
              >
                <div className="flex items-center gap-3 text-foreground">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-border/70 bg-muted/30 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    <FaInstagram className="size-4" />
                  </span>
                  <div className="space-y-0.5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Instagram
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      @solarizx
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground sm:text-xs">
              Sobre mim
            </p>
            <h2
              id="about-heading"
              className="max-w-[16ch] text-3xl font-bold tracking-tightest sm:text-4xl lg:text-5xl"
            >
              Gabriel Rodrigues Torres, 27 anos, Minas Gerais.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              <p>
                Sou desenvolvedor mineiro apaixonado por tecnologia, interfaces
                bem construídas e pelo processo de transformar ideias em
                projetos reais. Gosto de estruturar código com clareza, boa
                manutenção e atenção aos detalhes.
              </p>
              <p>
                Tenho um interesse forte por desenvolvimento com IA e já criei
                vários projetos explorando esse lado. Curto trabalhar com
                ferramentas como Claude Code, Gemini e Codex, buscando fluxos
                mais inteligentes, produtivos e criativos.
              </p>
              <p>
                Fora do código, gosto de jogos, música e colecionar discos de
                vinil. Tenho carinho especial por League of Legends, RPGs, Elden
                Ring e Diablo IV, além de rock dos anos 70, MPB e artistas como
                Rita Lee.
              </p>
            </div>

            <div className="space-y-4 border-l border-border/80 pl-5 lg:pl-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Interesses
              </p>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground">
                    <Gamepad2 className="size-4" />
                    <p className="text-sm font-medium">Games</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    LoL, RPG, Elden Ring e Diablo IV.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground">
                    <Disc3 className="size-4" />
                    <p className="text-sm font-medium">Música</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Vinil, rock dos anos 70, MPB e Rita Lee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeInView>
    </section>
  )
}
