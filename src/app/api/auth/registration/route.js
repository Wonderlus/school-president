
import User from "../../../../models/User";
import connect from "../../../../utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { firstname, lastname, password } = await request.json();
  console.log(firstname, lastname, password);
  await connect();
  const newUser = new User({
    firstname,
    lastname,
    password,
  });

  try {
    newUser.save();
    console.log()
    return new NextResponse("User has been created", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};