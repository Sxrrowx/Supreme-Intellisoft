import { ExternalLink } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with particles */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/986ba6a3cbfd9980c8b3735f542aca7c51321322?width=3840')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#E5E5E5",
        }}
      />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40">
            <div
              className="w-full h-full rounded-3xl bg-gray-200 shadow-2xl"
              style={{
                boxShadow:
                  "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 100px 18px rgba(214, 40, 40, 0.30)",
              }}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/653ec04ec44f983aaad6429a6f05940b03c09d0b?width=272"
                alt="Supremint Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-15 sm:w-32 sm:h-16 lg:w-36 lg:h-18"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="flex items-center">
            <div className="flex items-center gap-1 px-1 py-1 rounded-full bg-gray-200 border border-gray-200">
              <div className="flex items-center justify-center px-2 py-1 bg-supremint-red rounded-xl">
                <span className="text-white text-sm font-medium">New</span>
              </div>
              <span className="text-supremint-blue text-sm font-medium px-2 py-1">
                Automated Lead Generation
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-6 lg:gap-8 text-center">
            {/* Headline */}
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-supremint-blue">
                  Unlock the Power of{" "}
                </span>
                <span className="text-supremint-red">AI </span>
                <span className="text-supremint-blue">
                  Made Simple for Your Business
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p className="text-supremint-blue text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight">
                Supremint simplifies AI and automation for profitable business
                use, Without the tech jargon.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 bg-supremint-red text-white rounded-md font-medium text-sm hover:bg-red-600 transition-colors shadow-lg"
                style={{
                  boxShadow:
                    "0px 0.707px 0.707px -0.625px rgba(0, 0, 0, 0.15), 0px 1.807px 1.807px -1.25px rgba(0, 0, 0, 0.14), 0px 3.622px 3.622px -1.875px rgba(0, 0, 0, 0.14), 0px 6.866px 6.866px -2.5px rgba(0, 0, 0, 0.13), 0px 13.647px 13.647px -3.125px rgba(0, 0, 0, 0.11), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)",
                }}
              >
                Book A Demo
                <ExternalLink size={16} className="text-white" />
              </button>

              <button
                className="flex items-center justify-center px-6 py-3 bg-supremint-gray text-supremint-blue rounded-md font-medium text-sm hover:bg-gray-300 transition-colors shadow-lg"
                style={{
                  boxShadow:
                    "0px 0.707px 0.707px -0.625px rgba(0, 0, 0, 0.15), 0px 1.807px 1.807px -1.25px rgba(0, 0, 0, 0.14), 0px 3.622px 3.622px -1.875px rgba(0, 0, 0, 0.14), 0px 6.866px 6.866px -2.5px rgba(0, 0, 0, 0.13), 0px 13.647px 13.647px -3.125px rgba(0, 0, 0, 0.11), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)",
                }}
              >
                Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
