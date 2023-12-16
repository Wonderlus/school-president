import User from "../../../../models/User";
import connect from "../../../../utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, password } = await request.json();

  await connect();
  const newUser = new User({
    name,
    password,
  });

  try {
    newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};