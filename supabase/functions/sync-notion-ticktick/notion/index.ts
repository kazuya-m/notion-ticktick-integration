import { notion } from "./notionClient.ts"; // 拡張子を明示

// データベースの内容を取得する関数
export async function getDatabase(databaseId: string) {
  const response = await notion.databases
    .query({
      database_id: databaseId,
      filter: {
        timestamp: "created_time",
        created_time: {
          on_or_after: "2025-03-26T00:00:00Z",
        },
      },
    })
    .then((res: any) => {
      console.log("Fetched notion database successfully");
      return res.results;
    })
    .catch((error) => {
      console.error("Failed to fetch database:", error);
      return [];
    });
  return response;
}
