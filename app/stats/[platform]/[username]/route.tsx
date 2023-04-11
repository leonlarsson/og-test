import { ImageResponse } from "next/server";

export const config = {
    runtime: "edge"
}

export const GET = async (request: Request, { params: { platform, username } }: { params: { platform: string, username: string } }) => {

    if (!["pc", "ps4", "xboxone", "ps5", "xboxseries"].includes(platform.toLocaleLowerCase())) return error("Platform must be one of pc, ps4, xboxone, ps5, xboxseries");

    const res = await fetch(`https://api.gametools.network/bf2042/stats/?format_values=false&platform=${platform}&name=${encodeURIComponent(username)}`);
    const data = await res.json();

    if (res.ok) {
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
                    <img src={data.avatar} width={150} height={150} />
                    <div style={{ fontSize: 50 }}>{data.userName}</div>
                    <div style={{ marginTop: 10, display: "flex", color: "green" }}>{data.kills.toLocaleString("en")} kills</div>
                    <div style={{ display: "flex", color: "red" }}>{data.deaths.toLocaleString("en")} deaths</div>
                </div>

            ),
            {
                width: 1200,
                height: 600
            }
        );
    } else {
        return error("Could not find.");
    };
}

const error = (message: string) => {
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
                <div style={{ color: "red" }}>{message}</div>
            </div>

        ),
        {
            width: 1200,
            height: 600
        }
    );
}