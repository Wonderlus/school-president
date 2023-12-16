import User from "@/models/User";
import connect from "@/utils/db";
import {NextResponse} from "next-server";

export const POST = async (request) => {
    const {firstname, lastname, password} = await request.json();

    await connect();

    const newUser = new User({
        firstname,
        lastname,
        password,
    });

    try {
        newUser.save();
        return new NextResponse("Пользователь успешно создан", {status: 201});
    } catch (error) {
        return NextResponse(error, {status: 500});

    }
}

