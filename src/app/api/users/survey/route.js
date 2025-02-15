import User from "../../../../models/User";
import { NextResponse } from "next/server";
import connect from "../../../../utils/db";

export const GET = async () => {
    await connect();

    try {
        const count = await User.countDocuments({});
        return NextResponse.json({ count }, { status: 200 });
    } catch (error) {
        return NextResponse.json(error, { status: 500 });
    }
};
