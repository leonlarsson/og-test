import { ImageResponse } from "next/server";

export const config = {
    runtime: "edge"
}

export const GET = ({ params }: { params: { title: string } }) => {

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
                <div>Hello.</div>
                <div style={{ marginTop: 10 }}>You are on /works-too/{params.title}</div>
            </div>

        ),
        {
            width: 1200,
            height: 600
        }
    );
};