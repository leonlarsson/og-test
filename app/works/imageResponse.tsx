import { ImageResponse } from "next/server";

const regularFont = fetch(
    new URL("/public/fonts/Inter-Regular.ttf", import.meta.url)
).then(res => res.arrayBuffer());

const boldFont = fetch(
    new URL("/public/fonts/Inter-Bold.ttf", import.meta.url)
).then(res => res.arrayBuffer());

const blackFont = fetch(
    new URL("/public/fonts/Inter-Black.ttf", import.meta.url)
).then(res => res.arrayBuffer());

export default async () => {
    const [regularFontData, boldFontData, blackFontData] = await Promise.all([
        regularFont,
        boldFont,
        blackFont
    ]);

    const res = await fetch("https://api.battlefieldstats.com", { next: { revalidate: 60 } });
    const baseStats: BaseStats = await res.json();

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    fontSize: 32,
                    fontWeight: 400,
                    padding: 20
                }}
            >

                <div style={{ fontWeight: 900, fontSize: 50, display: "flex", whiteSpace: "pre" }}>Battledield Stats Discord Bot <span style={{ fontSize: 30, fontWeight: 400, marginLeft: 5, marginTop: 18 }}>by Mozzy</span></div>
                <div style={{ backgroundColor: "black", height: 2, width: 1180, alignSelf: "center" }} />

                <div style={{ display: "flex", fontWeight: 700, marginTop: 10 }}>In {baseStats.totalGuilds.toLocaleString("en")} servers, with {baseStats.totalMembers.toLocaleString("en")} members, and {baseStats.totalStatsSent.total.toLocaleString("en")} stats sent.</div>

                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {Object.entries(baseStats.totalStatsSent.games).map(x => <div key={x[0]} style={{ display: "flex", whiteSpace: "pre" }}>
                            <span style={{ fontWeight: 400 }}>{x[0]}:</span> <span style={{ fontWeight: 700 }}>{x[1].toLocaleString("en")}</span>
                        </div>
                        )}
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {Object.entries(baseStats.totalStatsSent.languages).map(x => <div key={x[0]} style={{ display: "flex", whiteSpace: "pre" }}>
                            <span style={{ fontWeight: 400 }}>{x[0]}:</span> <span style={{ fontWeight: 700 }}>{x[1].toLocaleString("en")}</span>
                        </div>
                        )}
                    </div>

                </div>

            </div>
        ),
        {
            width: 1200,
            height: 750,
            fonts: [
                {
                    name: "Inter",
                    data: regularFontData,
                    weight: 400
                },
                {
                    name: "Inter",
                    data: boldFontData,
                    weight: 700
                },
                {
                    name: "Inter",
                    data: blackFontData,
                    weight: 900
                }
            ]
        }
    );
}

export type BaseStats = {
    totalGuilds: number;
    totalChannels: number;
    totalMembers: number;
    totalStatsSent: {
        total: number;
        games: {
            "Battlefield 2042": number;
            "Battlefield V": number;
            "Battlefield 1": number;
            "Battlefield Hardline": number;
            "Battlefield 4": number;
            "Battlefield 3": number;
            "Battlefield Bad Company 2": number;
            "Battlefield 2": number;
        },
        languages: {
            English: number;
            French: number;
            Italian: number;
            German: number;
            Spanish: number;
            Russian: number;
            Polish: number;
            "Brazilian Portuguese": number;
            Turkish: number;
            Swedish: number;
            Norwegian: number;
            Finnish: number;
            Arabic: number;
        }
    },
    lastUpdated: {
        date: string;
        timestampMilliseconds: number;
        timestampSeconds: number;
    }
};