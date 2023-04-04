import "./GridItem.css";

export const GridItem = ({ url, alt_description }: Properties) => {
  return (
    <div className="col-md-5 col-sm-12 item m-1 d-flex justify-content-center align-items-center g-0 animate__animated animate__fadeIn">
      <img src={url} alt={alt_description} className="img-fluid" />
    </div>
  );
};

interface Properties {
  url: string;
  alt_description: string;
}
