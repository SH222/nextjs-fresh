export default function Home() {
  let name = "park";
  let link = "http://google.com";
  return (
    <>
      <h4 className="title">Apple Fresh</h4>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>링크</a>
    </>
  );
}
