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

      {/* Services Section */}
      <div className="relative py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md mb-6">
              <span className="text-supremint-blue text-sm font-medium">
                Our Services
              </span>
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mb-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-supremint-red">AI</span>
                <span className="text-supremint-blue">
                  {" "}
                  Solutions That Optimize
                </span>
                <br />
                <span className="text-supremint-blue">
                  Your Business Results
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p className="text-supremint-blue text-lg font-medium leading-relaxed">
                We build simple tools that take care of the busywork, so you can
                focus on what matters most.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col gap-24 max-w-6xl mx-auto">
            {/* Workflow Automation */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5d8bb43950424a48a8d33974ba96d959%2F69f449c6c9364f14af2577579a3ff69f?format=webp&width=800"
                    alt="AI Dashboard for Workflow Automation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    Workflow Automation
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Simplify your Workflows
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  We optimize your operations by automating everyday workflows
                  like data entry and approvals, so your team can focus on
                  higher-impact work.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Internal Task Bots
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    100+ Automations
                  </span>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c827f90cd784978224d5bb08a71f5e324bfd3ebd?width=700"
                    alt="AI Assistant Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    AI Assistant
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Optimize Your Time
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  From scheduling meetings to writing emails and summarizing
                  calls, our AI assistants operate 24/7 to keep your business
                  efficient, organized, and one step ahead.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Emails
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Scheduling
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Many more
                  </span>
                </div>
              </div>
            </div>

            {/* Sales & Marketing */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full relative rounded-xl overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f8827b5fd553280d0cfe2ea38fe53fbcd7a3b2c?width=700"
                    alt="Sales & Marketing Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray/80 rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    Sales & Marketing
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Boost Sales Performance
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  AI-driven tools to attract leads, deliver personalized
                  messages, and automate content—so your sales grow and your
                  brand shines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Leads
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Content
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Social post
                  </span>
                </div>
              </div>
            </div>

            {/* Custom Projects */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-[450px] h-80 bg-supremint-gray rounded-2xl p-12 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                {/* Custom dashboard interface */}
                <div className="w-full h-full bg-supremint-blue rounded-xl p-4 relative">
                  <div className="bg-supremint-gray rounded-lg p-4 h-full flex flex-col gap-3">
                    <div className="text-xs text-supremint-blue font-medium">
                      Hey David!
                    </div>
                    <div className="text-xs text-supremint-blue">
                      Here is your Custom project & schedule
                    </div>

                    <div className="bg-supremint-gray rounded-md p-3 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-supremint-blue rounded-sm"></div>
                        <span className="text-xs text-supremint-blue font-medium">
                          On going project:
                        </span>
                      </div>

                      <div className="bg-supremint-gray rounded p-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-supremint-blue rounded-sm"></div>
                          <div>
                            <div className="text-xs text-supremint-blue font-medium">
                              Customer Support Chatbot
                            </div>
                            <div className="text-xs text-supremint-blue">
                              90% Finished
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-gray-300 my-2"></div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-3 bg-supremint-blue rounded-sm"></div>
                          <span className="text-supremint-blue">Schedule</span>
                        </div>
                        <div className="flex gap-1">
                          {["Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <div
                              key={day}
                              className="text-xs text-supremint-blue px-1 py-0.5"
                            >
                              {day}
                            </div>
                          ))}
                          <div className="text-xs text-supremint-blue px-1 py-0.5 bg-purple-500 rounded">
                            Su
                          </div>
                        </div>
                        <div className="text-xs text-supremint-blue">
                          No meeting today.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6 lg:max-w-[470px]">
                <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md">
                  <span className="text-supremint-blue text-sm font-medium">
                    Custom Projects
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-medium text-supremint-blue leading-tight">
                  Build Smarter Systems
                </h3>
                <p className="text-supremint-blue text-base leading-relaxed max-w-md">
                  Whether you're starting from scratch or enhancing an existing
                  system, we offer strategic consulting and develop custom AI
                  projects aligned with your unique goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Strategy
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Custom AI
                  </span>
                  <span className="px-3 py-2 bg-supremint-blue text-white text-sm rounded-md">
                    Consulting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-2 bg-supremint-gray rounded-md mb-6">
              <span className="text-supremint-blue text-sm font-medium">Our Process</span>
            </div>

            {/* Main Heading */}
            <div className="max-w-3xl mb-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-supremint-blue">
                Our Simple and Scalable Process
              </h2>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl">
              <p className="text-supremint-blue text-lg font-medium leading-relaxed">
                We design, develop, and implement automation tools that help you work smarter, not harder
              </p>
            </div>
          </div>

          {/* Process Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Step 1: Smart Analyzing */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-medium">Smart Analyzing</h3>
                  <p className="text-white/90 leading-relaxed">
                    We assess your needs and identify AI solutions to streamline workflows and improve efficiency.
                  </p>
                </div>

                {/* Analysis Visualization */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="flex justify-between items-start h-full">
                    {/* Left: Radar Chart */}
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative w-24 h-24">
                        {/* Concentric circles */}
                        <div className="absolute inset-0 border border-gray-400 rounded-full opacity-20"></div>
                        <div className="absolute inset-3 border border-gray-400 rounded-full opacity-20"></div>
                        <div className="absolute inset-6 border border-gray-400 rounded-full opacity-20"></div>
                        {/* Radar sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-supremint-red/30 to-transparent rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-supremint-blue text-xs text-center">
                        Analyzing current workflow..
                      </p>
                    </div>

                    {/* Right: Checklist */}
                    <div className="flex-1 ml-6 space-y-2">
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg className="w-3 h-3 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-supremint-blue">System check</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg className="w-3 h-3 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-supremint-blue">Process check</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg className="w-3 h-3 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-supremint-blue">Speed check</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg className="w-3 h-3 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-supremint-blue">Manual work</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded text-xs">
                        <svg className="w-3 h-3 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-supremint-blue">Repetitive tasks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: AI Development */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-medium">AI Development</h3>
                  <p className="text-white/90 leading-relaxed">
                    Our team builds intelligent automation systems tailored to your business processes.
                  </p>
                </div>

                {/* Code Editor Visualization */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="bg-supremint-blue/20 rounded p-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-supremint-blue">automation_script.py</div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-supremint-blue/30 rounded"></div>
                        <div className="w-3 h-3 bg-supremint-blue/30 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs font-mono">
                    <div className="text-supremint-blue">
                      <span className="text-supremint-red">def</span> check_trigger(self, value):
                    </div>
                    <div className="text-supremint-blue ml-4">
                      self.threshold = threshold
                    </div>
                    <div className="text-supremint-blue ml-4">
                      self.status = "inactive"
                    </div>
                    <div className="text-supremint-blue ml-4">
                      if value > self.threshold:
                    </div>
                    <div className="text-supremint-blue ml-8">
                      self.status = "active"
                    </div>
                    <div className="text-supremint-blue ml-8">
                      return "Automation triggered!"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Seamless Integration */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-medium">Seamless Integration</h3>
                  <p className="text-white/90 leading-relaxed">
                    We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.
                  </p>
                </div>

                {/* Integration Visualization */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="flex items-center justify-between h-full">
                    {/* Our Solution */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-12 h-12">
                        <div className="w-full h-full rounded-lg bg-gray-300 shadow-lg"></div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/851492e1d614a859d0241e6ab3526bd740113a0d?width=93"
                          alt="Supremint Logo"
                          className="absolute inset-1 w-10 h-5"
                        />
                      </div>
                      <p className="text-supremint-blue text-xs">Our solution</p>
                    </div>

                    {/* Connection Lines */}
                    <div className="flex-1 flex flex-col items-center space-y-2">
                      <div className="w-16 h-0.5 bg-supremint-red/30 rounded"></div>
                      <div className="w-16 h-0.5 bg-supremint-red/30 rounded"></div>
                      <div className="w-16 h-0.5 bg-supremint-red/30 rounded"></div>
                    </div>

                    {/* Your Stack */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-supremint-blue rounded p-2 flex items-center justify-center">
                        <div className="w-full h-full bg-white/20 rounded"></div>
                      </div>
                      <p className="text-supremint-blue text-xs">Your stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Continuous Optimization */}
            <div className="bg-supremint-blue rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-2 py-1 border border-white rounded text-xs font-medium">
                    Step 4
                  </div>
                  <h3 className="text-2xl font-medium">Continuous Optimization</h3>
                  <p className="text-white/90 leading-relaxed">
                    We refine performance, analyze insights, and enhance automation for long-term growth.
                  </p>
                </div>

                {/* Optimization Dashboard */}
                <div className="bg-gray-200 rounded-lg p-6 h-48">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/10 px-3 py-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        </svg>
                        <div>
                          <div className="text-supremint-blue font-medium">Chatbot system</div>
                          <div className="text-supremint-blue/70">Efficiency will increase by 20%</div>
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-supremint-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between bg-white/10 px-3 py-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="text-supremint-blue font-medium">Workflow system</div>
                          <div className="text-supremint-blue/70">Update available..</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-between bg-white/10 px-3 py-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-supremint-blue" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        <div>
                          <div className="text-supremint-blue font-medium">Sales system</div>
                          <div className="text-supremint-blue/70">Up to date</div>
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}