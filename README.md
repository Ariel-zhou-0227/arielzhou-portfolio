# arielzhou-portfolio
# 文件结构（把这些文件原样创建到你的仓库里）

arielzhou-portfolio/
├─ package.json
├─ tsconfig.json
├─ next.config.mjs
├─ postcss.config.js
├─ tailwind.config.ts
├─ README.md
└─ app/
   ├─ globals.css
   ├─ layout.tsx
   └─ page.tsx

# package.json
{
  "name": "arielzhou-portfolio",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.2.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "^11.2.6",
    "lucide-react": "^0.441.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.9",
    "typescript": "^5.5.4"
  }
}

# next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };
export default nextConfig;

# tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

# postcss.config.js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };

# tailwind.config.ts
import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { cream: '#F6F5F3' } } },
  plugins: [],
} satisfies Config

# app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --bg:#F6F5F3; --fg:#111; --muted:#6B7280; --card:rgba(0,0,0,.04); --border:rgba(0,0,0,.1); }
html,body{ background:var(--bg); color:var(--fg); }
a{ text-underline-offset:2px; }

# app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ariel Zhou — Fashion Marketing Portfolio',
  description: 'Data-led brand storytelling and highly visual content for fashion & luxury.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

# app/page.tsx
"use client";
import { motion } from 'framer-motion'
import { Mail, ArrowRight, FileDown, TrendingUp, Palette } from 'lucide-react'

const email = "123020352@link.cuhk.edu.com"

// 👉 把你的图片放到 /public/images/ ，并按下面文件名命名（可增减）：
// Portraits：IMG_0950.JPG, IMG_0954.JPG, IMG_0955_2.JPG, IMG_0956_2.JPG, IMG_0957.JPG, IMG_9857.JPG
// Pets：WechatIMG376.jpg, WechatIMG377.jpg, IMG_2476.JPG
const portraits = [
  "/images/IMG_0950.JPG",
  "/images/IMG_0954.JPG",
  "/images/IMG_0955_2.JPG",
  "/images/IMG_0956_2.JPG",
  "/images/IMG_0957.JPG",
  "/images/IMG_9857.JPG",
]
const pets = [
  "/images/WechatIMG376.jpg",
  "/images/WechatIMG377.jpg",
  "/images/IMG_2476.JPG",
]
const heroImg = "/images/IMG_9857.JPG"

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-black/80" />
            <span className="text-sm tracking-widest uppercase text-gray-700 font-semibold">Ariel Zhou</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#work" className="hover:opacity-80">Highlights</a>
            <a href="#experience" className="hover:opacity-80">Experience</a>
            <a href="#downloads" className="hover:opacity-80">Downloads</a>
            <a href="#gallery" className="hover:opacity-80">Gallery</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-3 py-2 rounded-md"><Mail className="w-4 h-4" /> Email Me</a>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs text-gray-700">
            Fashion Marketing • Social Media • Growth
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">Ariel Zhou</h1>
          <p className="mt-2 text-lg text-gray-700">Social Media / Fashion Marketing</p>
          <p className="mt-6 text-base md:text-lg text-gray-700 max-w-xl">
            Data-led brand storytelling and highly visual content for fashion & luxury.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">View Work <ArrowRight className="w-4 h-4" /></a>
            <a href={"mailto:" + email} className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-md">Email Me</a>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900/10 via-neutral-700/5 to-neutral-400/5 p-1">
            <img src={heroImg} alt="Ariel headshot" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </motion.div>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Key Wins</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["WeChat followers YoY", "+29.5%"],
            ["Engagement YoY", "+17.83%"],
            ["Monthly revenue (own brand)", "¥80,000+"],
            ["Case Awards", "Top10 & Potential"]
          ].map(([label, value], i) => (
            <div key={i} className="rounded-xl bg-black/5 border border-black/10 p-4">
              <div className="text-gray-700 text-sm">{label}</div>
              <div className="text-3xl font-semibold mt-1">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-4">
          <div className="rounded-xl bg-black/5 border border-black/10 p-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-lg font-medium">Publicis Groupe – LVMH Team · Social Media Intern</div>
              <div className="text-xs text-gray-500">Jun – Aug 2025</div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Owned corporate/enterprise WeChat calendars, copy & layout</li>
              <li>Strategy breakdown from briefs; feedback loop & delivery</li>
              <li>Weekly KPI tracking (Pivot/VLOOKUP) & reviews</li>
              <li>Multi-project coordination & vendor docs management</li>
            </ul>
          </div>
          <div className="rounded-xl bg-black/5 border border-black/10 p-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-lg font-medium">Yi-Ou Tea Co. · Co-founder & Head of Marketing</div>
              <div className="text-xs text-gray-500">Mar 2024 – Apr 2025</div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Brand positioning/visuals/BD; built private-domain loop</li>
              <li>6,000+ members, 74% coverage, 73% retention</li>
              <li>¥80k+ Mo. revenue; ¥20k+ Mo. profit</li>
            </ul>
          </div>
          <div className="rounded-xl bg-black/5 border border-black/10 p-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="text-lg font-medium">Wuyou Media · Live Ops Intern</div>
              <div className="text-xs text-gray-500">Jun – Aug 2024</div>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>Full-cycle live ops; 100k+ RMB/day peak</li>
              <li>Grew new host to monthly 500k+ RMB</li>
              <li>Short-video editing & packaging</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="downloads" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><FileDown className="w-5 h-5" /> Portfolio & Resumes</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-black/5 border border-black/10 p-4">
            <div className="text-lg font-medium mb-2">Selected Portfolios (PDF)</div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><a className="underline" href="/assets/seasonal-winds.pdf" download>Seasonal Winds – Brand Book (PDF)</a></li>
              <li><a className="underline" href="/assets/milatu-deck.pdf" download>MiLaTu – Jewelry Brand Deck (PDF)</a></li>
              <li><a className="underline" href="/assets/spy-potato.pdf" download>Spy Potato – Bain Cup Strategy (PDF)</a></li>
              <li><a className="underline" href="/assets/mkt-final-presentation.pdf" download>Burberry Repositioning (PDF)</a></li>
            </ul>
          </div>
          <div className="rounded-xl bg-black/5 border border-black/10 p-4">
            <div className="text-lg font-medium mb-2">Resume Download</div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><a className="underline" href="/assets/ariel-zhou-resume-en.pdf" download>English Resume (PDF)</a></li>
              <li><a className="underline" href="/assets/zhou-yinglian-resume-zh.pdf" download>中文简历 (PDF)</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-lg font-medium mb-2">WeChat Articles</div>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><a className="underline" href="https://mp.weixin.qq.com/s/Lsizz7UguR2LIuFbWl03MQ" target="_blank">Article 1</a></li>
            <li><a className="underline" href="https://mp.weixin.qq.com/s/y2BgbQ7V_UdBanlAIaVThQ" target="_blank">Article 2</a></li>
            <li><a className="underline" href="https://mp.weixin.qq.com/s/AsKfXLElHWOCflCJIr4XCg" target="_blank">Article 3</a></li>
            <li><a className="underline" href="https://mp.weixin.qq.com/s/JaIpw7B9XNdtEfl4LYKVGA" target="_blank">Article 4</a></li>
          </ul>
        </div>
      </section>

      <section id="gallery" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Palette className="w-5 h-5" /> Gallery</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {portraits.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-black/5 border border-black/10 aspect-[4/5]">
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="text-lg font-medium mt-8 mb-3">Life & Pets</div>
        <div className="grid md:grid-cols-4 gap-4">
          {pets.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-black/5 border border-black/10 aspect-square">
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-3xl border border-black/10 bg-black/5 p-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-xl font-semibold mb-2">Contact</div>
            <p className="text-gray-700">Open to roles in fashion marketing, social media and brand growth.</p>
            <div className="mt-4 text-sm">
              <div>Email: <a className="underline" href={"mailto:" + email}>{email}</a></div>
            </div>
            <div className="mt-4">
              <a href={"mailto:" + email} className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 rounded-md">Email Me</a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(pets.slice(0,3)).map((src, i) => (
              <div key={i} className="rounded-2xl border border-black/10 bg-black/5 overflow-hidden aspect-square">
                <img src={src} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <footer className="text-center text-xs text-gray-500 mt-6 py-6">
          © {new Date().getFullYear()} Ariel Zhou — Built with Next.js & Tailwind.
        </footer>
      </section>
    </div>
  )
}

# README.md
# arielzhou-portfolio

Minimal Next.js + Tailwind site for Ariel Zhou (English default), ready for Vercel.

## How to deploy (no download needed)
1) 在 GitHub 新建一个仓库，名为 `arielzhou-portfolio`。
2) 在仓库里逐个 **New file**，把上面这些文件名与内容粘贴进去（路径/名字必须一致）。
3) 在仓库根目录新建 **public** 文件夹，并在其下新建：
   - `public/assets/` 里上传这些 PDF（用下列文件名）：
     - `seasonal-winds.pdf`（四季风初稿.pdf）
     - `milatu-deck.pdf`（MiLaTu 定稿.pdf）
     - `spy-potato.pdf`（薯塔特工-香港中文大学(深圳).pdf）
     - `mkt-final-presentation.pdf`（MKT Final Presentation (1).pdf）
     - `ariel-zhou-resume-en.pdf`（Ariel ZHOU-resume.pdf）
     - `zhou-yinglian-resume-zh.pdf`（周映琏-简历-中-第五代.pdf）
   - `public/images/` 里上传你的照片（用上面 page.tsx 里的文件名；带空格的去掉空格或改为下划线 `_`）。
4) 打开 **Vercel** → New Project → Import GitHub 仓库 → Framework 选 **Next.js** → Deploy。
5) 成功后域名通常是 `arielzhou-portfolio.vercel.app`，你也可以绑定自定义域。

## Local Dev
```bash
npm i
npm run dev
          

