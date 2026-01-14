import { ArrowDownToDot } from "lucide-react";
import "./article.css";
export default function Message() {
  return (
    <div className="message-container">
      <div className="message-header">
        <h1>
          <span>Hello, I’m</span> <span>Geoffrey Ashimwe.</span>
        </h1>

        <ArrowDownToDot size={56} color={"#10B981"} />
      </div>
      <p>
        A senior-year design student who trying to specialize in 3D modeling &
        texturing.
      </p>
    </div>
  );
}
