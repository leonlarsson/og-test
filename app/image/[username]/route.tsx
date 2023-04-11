import { ImageResponse } from "next/server";

export const config = {
    runtime: "edge"
}

export const GET = async (request: Request, { params: { username } }: { params: { username: string } }) => {

    const res = await fetch(`https://api.gametools.network/bf2042/stats/?format_values=false&name=${encodeURIComponent(username)}&platform=pc`);
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
                    <img src={data.avatar} />
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
                    <div style={{ color: "red" }}>Not found</div>
                </div>

            ),
            {
                width: 1200,
                height: 600
            }
        );
    };
}