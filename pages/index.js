import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conscious Discipline 8/23/22</title>
        <meta name="description" content="A BGCUV Training." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/emotions">
          <Button>Emotion Game</Button>
        </Link>
        <Link href="/brain-state-quiz">
          <Button>Brain State Quiz</Button>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
}
