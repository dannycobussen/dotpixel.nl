import { json, type LinksFunction, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import faStylesheetUrl from '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";

// Prevent fontawesome from dynamically adding its css since we are going to include it manually
config.autoAddCss = false;

import siteCss from "./styles/site.css";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: siteCss },
  { rel: "stylesheet", href: faStylesheetUrl }
];

export const meta: MetaFunction = () => {
  return [
    { title: "dotPixel | Danny Cobussen", charset: "utf-8", viewport: "width=device-width,initial-scale=1" },
    { name: "description", content: "Meet dotPixel, a full stack developer passionate about creating dynamic, user-friendly websites. I love innovative web solutions." },
  ];
};

export const loader: LoaderFunction = async () => {
  return json({ gaTrackingId: "G-WLXJFGJ1JD" });
}

export default function App() {
  const { gaTrackingId } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-primary">
        <Outlet />
        <ScrollRestoration />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${gaTrackingId});
            `
          }}
        />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
