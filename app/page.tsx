import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-black items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
        <div className="absolute inset-0 block border-b transition-all border-neutral-100 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75"></div>
        <div className="mx-auto w-full px-3 relative max-w-screen-lg lg:px-4 xl:px-0">
          <div className="flex h-14 items-center justify-between">
            <div className="grow basis-0">
              <Image
                src="/fastbreak_darkmode.svg"
                alt="Fastbreak Logo"
                width={120}
                height={18}
                priority
              />
            </div>
            <div className="hidden grow basis-0 justify-end gap-2 lg:flex">
              <a
                href="https://app.formbricks.com/s/cm7uhrjvq0000l703slisrvf8"
                className="transition-all border-black bg-black text-white hover:bg-neutral-800 hover:ring-4 hover:ring-neutral-200 font-semibold flex h-8 items-center rounded-full border px-4 text-sm dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-50 dark:hover:ring-white/10"
              >
                Join beta
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-hidden md:h-[calc(100vh-100px)] pt-2 mx-auto w-full max-w-5xl px-6 md:max-w-7xl">
        <div className="animate-hero-text-slide-up-fade z-10 flex flex-col items-center justify-center">
          <Image
            src="/cubic_logo.png"
            alt="Fastbreak Logo"
            width={240}
            height={200}
          />

          <div className="flex flex-col mx-auto max-w-3xl text-center">
            <h1 className="text-[5em] leading-[1.1em] font-bold my-3 max-w-2xl">
              Animated titles for startups
            </h1>
            <div className="flex flex-col">
              <p className="text-xl text-gray-400">
                1-click animated titles for your next ad or product launch
                video.
              </p>
              <p className="text-xl text-gray-400">
                You control the message.
                <span className="text-gray-200 ms-2">
                  We make it look f*cking great.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* <ol className="list-inside list-decimal gap-2 text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="tracking-[-.01em]">Enter a copy/script </li>
          <li className="tracking-[-.01em]">
            Press a button{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              generate
            </code>
          </li>
          <li className="mb-2 tracking-[-.01em]">Export video</li>
        </ol> */}

        <div className="flex gap-4 items-center flex-row sm:flex-row mt-6">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-semibold text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join beta
          </a>
          <a>See example</a>
        </div>
      </div>
      <div className="mx-auto w-full px-3 relative max-w-screen-lg lg:px-4 xl:px-0">
        <div className="grid grid-cols-1 items-baseline gap-x-6 gap-y-12 pb-24 pt-24 sm:grid-cols-4">
          <div className="flex flex-col items-start gap-2 text-sm">
            <p className="text-gray-700 font-medium">@ 2025 Fastbreak</p>
            {/* Polyfund / / Hatch / Stash */}
            <p className="text-gray-500">A project by Nectar Labs UG</p>
            <p className="text-gray-500">
              Our mission is to add a little spice to your announcements.
            </p>
          </div>
          <div className="flex flex-inline justify-start col-span-2 items-center gap-2 text-sm">
            <p className="text-gray-700 font-medium">Backed by</p>
            <Image
              width={"12"}
              height={"12"}
              className="w-[130px]"
              src="/techstars-white.svg"
              alt="Techstars logo"
            />
          </div>
          <div className="flex flex-col sm:items-end gap-2 text-sm">
            <a
              href="mailto:robincgreenwood@gmail.com"
              className="text-gray-700 hover:text-gray-600 underline font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
