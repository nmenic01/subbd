
import type { Metadata } from "next";
import config from "./config";

export const generateMetadataTags = ({
    title,
    description,
    keywords,
    openGraph,
    canonicalUrlRelative,
    extraTags,
}: Metadata & {
    canonicalUrlRelative?: string;
    extraTags?: Record<string, string>;
} = {}) => {
    return {
        title: title || `${config.appName} | Join Beta`,
        description: description || config.appDescription,
        keywords: keywords || [config.appName],
        applicationName: config.appName,
        metadataBase: new URL(
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000/"
                : `https://${config.domainName}/`
        ),

        openGraph: {
            title: openGraph?.title || config.appName,
            description: openGraph?.description || config.appDescription,
            url: openGraph?.url || `https://${config.domainName}/`,
            siteName: openGraph?.title || config.appName,
            images: [
                {
                    url: `https://${config.domainName}/opengraph-image.png`,
                    width: 1200,
                    height: 660,
                },
            ],
            locale: "en_US",
            type: "website",
        },

        ...(canonicalUrlRelative && {
            alternates: { canonical: canonicalUrlRelative },
        }),
        ...extraTags,
    };
};
