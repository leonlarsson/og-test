import imageResponse from "./imageResponse";

export const config = {
    runtime: "edge"
};

export const GET = () => imageResponse();