import "dotenv/config";

import app from "@app";
import "@database";

app.listen(process.env.SERVER_PORT || 3001, () => {
  console.log(
    `🚀 Server running on http://localhost:${process.env.PORT || 3001}`
  );
});
