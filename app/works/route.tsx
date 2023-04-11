import { ImageResponse } from "next/server";

export const config = {
    runtime: "edge"
}

export const GET = () => {

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
                <div>1234 guilds</div>
                <div style={{ marginTop: 10 }}>5678 channels</div>
            </div>

        ),
        {
            width: 1200,
            height: 600
        }
    );
};