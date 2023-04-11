import { ImageResponse } from "next/server";

export const config = {
    runtime: "edge"
}

export const GET = async (request: Request, { params: { username } }: { params: { username: string } }) => {

    try {
        const res = await fetch(`https://api.gametools.network/bf2042/stats/?format_values=false&name=${encodeURIComponent(username)}&platform=pc`);
        const data = await res.json();

        console.log(data.userName, data.kills);

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
                    <div>{data.userName}</div>
                    <div style={{ marginTop: 10 }}>{data.kills} kills</div>
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