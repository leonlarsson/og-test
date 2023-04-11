import { ImageResponse } from "next/server";

export default async () => {

    let test = "test";
    await new Promise(r => setTimeout(r, 2000));
    test = new Date().toUTCString();

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
                <div style={{ fontSize: 50 }}>Hello world</div>
                <div style={{ marginTop: 10 }}>I am an OG image.</div>
                <div style={{ fontSize: 26, marginTop: 10 }}>{test}</div>
            </div>

        ),
        {
            width: 1200,
            height: 600
        }
    );
}