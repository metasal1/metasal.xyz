'use client'
import Image from "next/image";
import { SocialIcon } from 'react-social-icons'
import QRCode from "react-qr-code";
import { useState } from 'react';
import { RxOpenInNewWindow as OpenIcon } from "react-icons/rx";

interface LinkData {
  name: string;
  url: string;
}

const links: LinkData[] = [
  { name: "Airalo", url: "https://ref.airalo.com/yGLJ" },
  { name: "Airdropped", url: "https://www.airdropped.link/r/loudly-butterflies-listened-3" },
  { name: "All Domains", url: "https://alldomains.id/?ref=metasal" },
  { name: "AssetDash", url: "https://bit.ly/3dNXbSJ" },
  { name: "Backpack", url: "https://backpack.exchange/refer/downunder" },
  { name: "BingX", url: "https://bingx.com/partner/downunder" },
  { name: "BonkBot", url: "https://t.me/bonkbot_bot?start=ref_downunder" },
  { name: "Calendar", url: "https://calendly.com/metasal" },
  { name: "Coinspot", url: "https://www.coinspot.com.au/?affiliate=7JVCN9" },
  { name: "Cube Exchange", url: "https://cube.exchange/en/refer/bbADC4" },
  { name: "Divvy Bet", url: "https://app.divvy.bet/?r=downunder" },
  { name: "Drift", url: "https://app.drift.trade/ref/salim" },
  { name: "Drip", url: "https://drip.haus/?code=AwcfF9S4" },
  { name: "Echo", url: "https://sayecho.xyz/?r=metasal_" },
  { name: "Events", url: "https://lu.ma/calendar/manage/cal-5AwelwAyyUTWlbS" },
  { name: "Flash Trade", url: "https://beast.flash.trade/?referral=Beast_0788" },
  { name: "Fluxbot", url: "https://t.me/fluxbeam_bot?start=metasal" },
  { name: "Fuse Wallet", url: "https://invite.fusewallet.com/welcome?code=c66fd3be-f4f0-48ea-b2a2-a24f32e4681a" },
  { name: "Github", url: "https://github.com/metasal1" },
  { name: "Grass", url: "https://app.getgrass.io/register/?referralCode=S4xVHIPDFMG6NIi" },
  { name: "Gib", url: "https://app.gib.work?ref=metasal" },
  { name: "Independent", url: "https://portal.independentreserve.com/register?referralCode=BNSGTC" },
  { name: "Infinex", url: "https://app.infinex.xyz?r=Y8A0C0NS" },
  { name: "ISC", url: "https://prospera.isc.money/?ref=ML8DAYJN" },
  { name: "Jupiter Exchange", url: "https://jup.ag/swap/USDC-FUTURE?referrer=8bbPc25fviwtBdDNR7dxyznp2qxUTKbxGtsougy9w7de&feeBps=100" },
  { name: "Kaito", url: "https://portal.kaito.ai/auth/entry?referralCode=A912D518" },
  { name: "Ledger", url: "https://shop.ledger.com/pages/referral-program?referral_code=3RWBV1JGQ3Z3G" },
  { name: "Moon Wallet", url: "https://t.me/moonWallet_solbot?start=NpC4AFbr" },
  { name: "Moonshot", url: "https://moonshot.money?ref=VG4jb5kjvN" },
  { name: "Moonwalk", url: "https://app.moonwalk.fit/?referral=metasal" },
  { name: "Omi AI", url: "https://www.omi.me/?ref=metasal" },
  { name: "Program Db", url: "https://programdb.vercel.app/" },
  { name: "Raybot", url: "https://t.me/ray_blue_bot?start=ref_G7hJt5" },
  { name: "Saga", url: "https://solanamobile.com/refer/metasal_" },
  { name: "ScreenStudio", url: "https://www.screen.studio/?aff=d0A7z" },
  { name: "SolAge", url: "https://solage.vercel.app/" },
  { name: "Solana Domains", url: "https://sns.id/?affiliateRef=metasal" },
  { name: "Solana Web3.js v2 Demo", url: "https://solana-web3-v2-demo.vercel.app/" },
  { name: "SolBurner", url: "https://solburner.fun/" },
  { name: "Solid", url: "https://pass.solana.id/?referrer=OVV3VPh5GgIx8FfNlCGHr" },
  { name: "Squad Finder", url: "https://squadfinder.vercel.app/" },
  { name: "Step Finance", url: "https://app.step.finance/en/?ref=metasal" },
  { name: "Strava", url: "https://www.strava.com/clubs/solana" },
  { name: "Streamflow", url: "https://app.streamflow.finance/ref/GaxVqiQyJKQDRu6H4pfy9V6Xq19pHGr6HQKDQDv911Y4" },
  { name: "Teleport", url: "https://app.teleport.xyz/rider/refer/5HuovddjPdecCEfLS8RER21L9dEcftzVhav5VboTTfnb" },
  { name: "Tensor", url: "https://www.tensor.trade/accept?ref=LCY617" },
  { name: "Token Holders", url: "https://tokenhodlers.vercel.app/" },
  { name: "Vultr", url: "https://www.vultr.com/?ref=9667827" },
  { name: "Zeta", url: "https://dex.zeta.markets/trade/SOL-PERP?r=metasa" }
];

export default function Home() {
  const [showTable, setShowTable] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-4xl">
        METASAL
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          community builder, entrepreneur, full stack developer
        </code>
        <QRCode value={"https://metasal.xyz"} />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <SocialIcon target="_blank" url="https://x.com/metasal_" />
          <SocialIcon target="_blank" url="https://t.me/metasal" />
          <SocialIcon target="_blank" url="https://instagram.com/metasal" />
          <SocialIcon target="_blank" url="https://github.com/metasal1" />
          <SocialIcon target="_blank" url="https://youtube.com/@metasal" />
          <SocialIcon target="_blank" url="https://discord.com/users/702642579090440265" />
          <SocialIcon target="_blank" url="mailto:gm@metasal.xyz" />
          <SocialIcon target="_blank" url="https://calendly.com/metasal" label="Book a meeting" network="vsco" />
        </div>
      </main>

      <footer className="row-start-3 flex flex-col gap-6 items-center justify-center w-full">
        <div className="text-xl font-bold text-green-500">RECENT PROJECTS</div>
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <a href="https://solvogue.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />solvogue.vercel.app</a>
          <a href="https://solwebkit.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />solwebkit.vercel.app</a>
          <a href="https://scan.supapump.fun" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />scan.supapump.fun</a>
          <a href="https://supaconvert.vercel.app" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />supaconvert.vercel.app</a>
          <a href="https://www.npmjs.com/package/soltool" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />soltool</a>
          <a href="https://supapump.fun/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />supapump.fun</a>
          <a href="https://nftmate.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />nftmate.vercel.app 🏆</a>
          <a href="https://alldomains.id/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />alldomains.id</a>
          <a href="https://fam.fabs.fun/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />fam.fabs.fun</a>
          <a href="https://spl.tokenshit.com/price/SENDdRQtYMWaQrBroBrJ2Q53fgVuq95CV9UPGEvpCxa" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />spl.tokenshit.com</a>
          <a href="https://blockedfish.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />blockedfish.vercel.app </a>
          <a href="https://minrent.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />minrent.vercel.app</a>
          <a href="https://pudgydrop.vercel.app" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />pudgydrop.vercel.app </a>
          <a href="https://solburner.fun" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />solburner.fun</a>
          <a href="https://sol.new" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />sol.new</a>
          <a href="https://programwatch.dev" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />programwatch.dev</a>
          <a href="https://blinkfinder.vercel.app" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />blinkfinder.vercel.app</a>
          <a href="https://crabcast.vercel.app" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />crabcast.vercel.app</a>
          <a href="https://www.myblink.xyz/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />myblink.xyz</a>
          <a href="https://nfthodlers.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />nfthodlers.vercel.app</a>
          <a href="https://solage.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />solage.vercel.app</a>
          <a href="https://minrent.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />minrent.vercel.app</a>
          <a href="https://letsbounce.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />letsbounce.vercel.app</a>
          <a href="https://letsibrl.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />letsibrl.vercel.app</a>
          <a href="https://www.ibrl.club/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />ibrl.club</a>
          <a href="https://nfthodlers.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />nfthodlers.vercel.app</a>
          <a href="https://tokenstats.vercel.app/" target="_blank" rel="noopener noreferrer" className="mx-4"><OpenIcon />tokenstats.vercel.app</a>
        </div>

        <div className="flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://metasal.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            metasal.xyz
          </a>
          <button
            onClick={() => setShowTable(!showTable)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            BONUS
          </button>
          <div className="text-sm text-gray-500"><a href="https://beta.sanctum.so/metasal/support" target="_blank" rel="noopener noreferrer">Support Metasal by staking your SOL as SalSOL</a></div>
        </div>

        {showTable && (
          <div className="w-full overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="p-2">{link.name}</td>
                    <td className="p-2 flex gap-2 flex-wrap">
                      <button
                        onClick={() => copyToClipboard(link.url)}
                        className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600 transition-colors"
                      >
                        {copiedLink === link.url ? 'Copied!' : 'Copy'}
                      </button>
                      <a
                        href={link.url}
                        className="bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                      >
                        Open
                      </a>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-500 text-white px-2 py-1 rounded text-sm hover:bg-purple-600 transition-colors"
                      >
                        New Tab
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </footer>
    </div>
  );
}
