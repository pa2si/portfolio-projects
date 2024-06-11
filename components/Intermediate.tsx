const Intermediate = ({ text, id }: { text: string; id?: string }) => {
  return (
    <section
      className="mx-auto flex min-h-[17rem] max-w-7xl items-center bg-base-100 py-8"
      id={id}
    >
      <div className="mx-auto flex items-center justify-center lg:w-4/6">
        <div className="flex min-h-full items-center justify-center">
          <div className="border-2-b-primary w-3/4 rounded-lg xl:w-full">
            <p className="text-center text-4xl font-bold sm:text-5xl">{text}</p>
            <div className="mx-auto mt-8 max-w-3xl">
              <div className="relative mt-1 h-1 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intermediate;
