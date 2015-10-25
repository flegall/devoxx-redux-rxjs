function App (props) {
  return (
    <div>
      <section className="todoapp">
        <Header />
        <Main {...props} />
      </section>
      <Footer />
    </div>
  );
}
