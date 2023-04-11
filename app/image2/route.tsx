import { ImageResponse } from "next/server";

export const config = {
    runtime: "edge"
}

export const GET = async () => {

    try {
        const res = await fetch("https://api.battlefieldstats.com");
        const data = await res.json();

        console.log(data.totalGuilds, data.totalChannels);

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        fontSize: 32,
                        fontWeight: 600
                    }}
                >
                    <div>{data.totalGuilds} guilds</div>
                    <div style={{ marginTop: 10 }}>{data.totalChannels} channels</div>
                </div>

            ),
            {
                width: 1200,
                height: 600
            }
        );
    } catch (error) {
        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        fontSize: 32,
                        fontWeight: 600
                    }}
                >
                    <div style={{ color: "red" }}>Error fetching</div>
                </div>

            ),
            {
                width: 1200,
                height: 600
            }
        );
    }
};