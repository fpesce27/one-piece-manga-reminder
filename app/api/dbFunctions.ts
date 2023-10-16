import db from "./firebase"

async function getChapterNumber() {
    return await db.collection("one-piece").doc("current").get().then((doc) => {
        if (doc.exists) {
            return doc.data()?.lastChapter;
        } else {
            return 1
        }
    });
}

async function postChapter(data: string[], capitulo: number){
    await db.collection("one-piece").doc("current").set({
        images: data,
        lastChapter: capitulo,
      }).then(() => {
        console.log("Document successfully written!");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });
}

async function getChapterImages() {
    return await db.collection("one-piece").doc("current").get().then((doc) => {
        if (doc.exists) {
          return doc.data();
        } else {
          return []
        }
      }).catch((error) => {
        return []
      });
}

export { getChapterNumber, postChapter, getChapterImages };