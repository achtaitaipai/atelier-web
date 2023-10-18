import { globby } from "globby";

const main = async () => {
  const paths = await globby("**/index.html");
  console.log(paths);
};
main();
