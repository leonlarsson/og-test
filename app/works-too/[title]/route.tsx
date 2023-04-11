import { ImageResponse } from "next/server";

export const config = {
    runtime: "edge"
}

export const GET = (request: Request, { params }: { params: { title: string } }) => {

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
                <div style={{ display: "flex" }}><span>You are on /works-too/{params.title}</span></div>
            </div>
        ),
        {
            width: 1200,
            height: 600
        }
    );
};