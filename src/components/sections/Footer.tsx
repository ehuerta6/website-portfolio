const Footer = () => {
  return (
    <footer className='py-8 px-6 bg-muted/30 border-t border-border/40'>
      <div className='container mx-auto text-center text-muted-foreground'>
        <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
