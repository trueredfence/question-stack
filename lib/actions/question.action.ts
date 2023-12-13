"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(param: any) {
  try {
    await connectToDatabase();
  } catch (error) {}
}
