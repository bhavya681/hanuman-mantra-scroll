import { useParams, Link } from "react-router-dom";
import { 
  gotraData,
  nakshatraData,
  lagnaData,
  aartiData,
  gitaData,
  rishiVarnaData,
  vedicTimeData,
  DharmaCard as DharmaItem,
} from "@/data/dharmaData";

const allDharmaItems: DharmaItem[] = [
  ...gotraData,
  ...nakshatraData,
  ...lagnaData,
  ...aartiData,
  ...gitaData,
  ...rishiVarnaData,
  ...vedicTimeData,
];

const DharmaDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = allDharmaItems.find((x) => x.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Not Found</h1>
          <p className="text-muted-foreground mb-4">No dharma entry for this id.</p>
          <Link to="/" className="text-primary underline">Back to Library</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 container mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-primary underline">← Back to Scriptures</Link>
      </div>
      <div className="max-w-3xl mx-auto bg-card/80 border border-accent/20 rounded-xl overflow-hidden shadow">
        <div className="h-56 w-full overflow-hidden">
          <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-5">
          <h1 className="font-vedic text-2xl font-bold mb-1">{item.title}</h1>
          <p className="font-sanskrit text-primary/80 mb-3">{item.titleSanskrit}</p>
          <p className="text-muted-foreground mb-4">{item.description}</p>
          <div className="text-xs text-muted-foreground">Category: {item.category}</div>
        </div>
      </div>
    </div>
  );
};

export default DharmaDetail;


