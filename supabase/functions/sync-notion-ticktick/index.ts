import { getDatabase } from "./notion/index.ts";

Deno.serve(async (req) => {
	console.log("sync-notion-ticktick function called");

	// 環境変数から databaseId を取得
	const databaseId = Deno.env.get("NORION_TASK_DB_ID");

	if (!databaseId) {
		return new Response(
			JSON.stringify({
				message: "Environment variable NORION_TASK_DB_ID is not set",
				status: 500,
			}),
		);
	}

	const database = await getDatabase(databaseId);
	return new Response(JSON.stringify({ data: database, status: 200 }), {});
});
