import { Button } from "react-bootstrap";

interface Props {
  title: string;
  content: string;
  date: string;
  img?: string;
  link: string;
}
const Announcement: React.FC<Props> = ({ title, content, date, img, link }) => {
  return (
    <>
      <div className="bg-transparent  border-gray-700 border rounded-lg p-6">
        {img && (
          <img
            src={img}
            alt={title}
            width="100%"
            height="100%"
            className="rounded-2xl"
          />
        )}
        <br />
        <h1 className="font-bold">{title}</h1>
        <p className="text-[#D4D4D4] font-thin">{content}</p>
        <p className="flex justify-between items-center">
          <span>{date}</span>
          <Button className="bg-white text-black py-2 px-4 rounded-sm">
            <a href={link} target="_blank">
              Learn More
            </a>
          </Button>
        </p>
      </div>
    </>
  );
};

export default Announcement;
