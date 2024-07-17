const Footer = () => {
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear();


  return <footer className="mt-auto bg-blue-200 text-sm text-center p-2 text-black">Footer &copy;{currentYear}</footer>;
};

export default Footer;
