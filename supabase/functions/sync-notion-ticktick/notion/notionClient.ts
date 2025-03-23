import { Client } from "npm:@notionhq/client";

export const notion = new Client({
  auth: Deno.env.get("NOTION_API_KEY"), // 環境変数からAPIキーを取得
});
