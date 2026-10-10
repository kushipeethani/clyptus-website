import React, { useState } from 'react';
import { Sparkles, Calendar, UserCheck, X, ArrowRight, Clock, BookOpen, Search } from 'lucide-react';

interface BlogsPageProps {
  onNavigateContact?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  bannerImage: string;
  excerpt: string;
  fullContent: React.ReactNode;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigateContact }) => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const blogPosts: BlogPost[] = [
    {
      id: 'vinayaka-chavithi-2026',
      title: 'How We Celebrated Vinayaka Chavithi 2026 at Clyptus Software Solutions',
      category: 'Clyptus Culture Story',
      categoryColor: 'bg-sky-50 text-sky-700 border-sky-200/80',
      author: 'Deepak Kasina',
      authorRole: 'HR Executive',
      date: 'September 2026',
      readTime: '5 min read',
      bannerImage: '/blog-images/extracted_p1_1.png',
      excerpt:
        'Vinayaka Chavithi is always a special time at Clyptus Software Solutions. No matter how many days the festival lasts, our team goes above and beyond to make it memorable. As the ERP market evolves rapidly, we as an ERP service provider adapt continuously. From office decor to selecting a magnificent Ganesha idol, our team at Clyptus evolves with the times.',
      fullContent: (
        <div className="space-y-8 text-slate-800">
          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-medium pb-6 border-b border-slate-200">
            As the ERP market evolves rapidly, we as an ERP service provider adapt continuously. From office decor to selecting a magnificent Ganesha idol, our team at Clyptus evolves with the times.
          </p>

          {/* Section: Blending Innovation with Tradition */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-extrabold text-sky-600 uppercase tracking-widest block">
              INNOVATION & BRANDING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Blending Innovation with Tradition
            </h2>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              Since the tech world is driven by AI, we decided to integrate smart tools into our festival planning—using AI to brainstorm decor concepts, design custom event T-shirts, and communicate the essence of the festival in an interactive, engaging way. We also used cloud tools to send dynamic digital invitations to our team and clients.
            </p>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              As a creative company branding initiative, we designed custom T-shirts featuring Lord Ganesha in a typography word-art format. Placed right on the stomach of the design was a functional QR code pointing directly to our company website (<a href="https://clyptus.com" target="_blank" rel="noreferrer" className="text-sky-600 font-bold hover:underline">clyptus.com</a>).
            </p>

            {/* Document Image 1 */}
            <div className="w-full text-center my-6">
              <img
                src="/blog-images/extracted_p1_1.png"
                alt="Lord Ganesha T-Shirt & Event Design"
                className="max-h-[550px] w-auto max-w-full h-auto object-contain mx-auto rounded-2xl shadow-md border border-slate-200"
              />
            </div>
          </div>

          {/* Section: The 7-Day Journey */}
          <div className="pt-8 border-t border-slate-200 space-y-6">
            <span className="text-xs font-mono font-extrabold text-indigo-600 uppercase tracking-widest block">
              TIMELINE & MILESTONES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              The 7-Day Journey: Day-by-Day Highlights
            </h2>
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              Our celebrations spanned 11 active days. Every evening after work, employees stayed back late to transform our workspace into a grand sanctuary for Lord Ganesha. Management provided complete support, arranging late-night meals and safe cab transport for everyone working on decor.
            </p>

            {/* Day-by-Day Highlights */}
            <div className="space-y-8 pt-4">

              {/* Day 0 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    00
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Day 0: The Arrival & Setup
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  On the Sunday before the festival, everyone was working hard on decorations. Real flowers demanded late-afternoon effort, and I went out to bring our Lord Ganesha idol from the Ratnadeep store. The moment I saw the idol—tall, elegant, and beautiful—I knew it was perfect. Armed with my DJI Pocket camera, I captured the entire arrival from every angle. Carrying the heavy idol onto the setup stage took genuine teamwork, but once it was set, the festive vibe filled the entire office.
                </p>
              </div>

              {/* Day 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    01
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Day 1: Pooja, Tradition, and Diversity
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium mb-4">
                  Employees arrived dressed in vibrant traditional attire, turning our workplace into a temple setting. Even with our team’s diverse backgrounds, every single person contributed. We had three idols placed for pooja, listened to Ganesha stories, and shared prasadams. The delicious food kept our spirits high and everyone energized.
                </p>

                {/* Document Image 2 */}
                <div className="w-full text-center my-4">
                  <img
                    src="/blog-images/extracted_p2_1.jpeg"
                    alt="Day 1 Pooja & Celebration Memories"
                    className="max-h-[500px] w-auto max-w-full h-auto object-contain mx-auto rounded-xl shadow-sm border border-slate-200"
                  />
                </div>
              </div>

              {/* Days 2 to 4 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    2-4
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Days 2 to 4: Balancing Work, Rituals, and WFH
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  Morning and evening poojas went hand-in-hand with our daily project deliverables. Employees extended hours by spending dedicated time for prayers, enjoying changing daily prasadams, and utilizing flexible Work-From-Home (WFH) options enabled by management.
                </p>
              </div>

              {/* Day 5 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    05
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Day 5: Lakshmi Ganapati Pooja & Unique Traditions
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  Late the night before, our women colleagues stayed back to tie bangles in a precise sequence, creating a beautiful garland of bangles for Day 5. The management arranged a special Lakshmi Ganapati Pooja, and seeing such dedication and rich rituals in our workspace was incredible.
                </p>
              </div>

              {/* Day 6 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    06
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Day 6: Rest & Reflection
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  Day 6 allowed us to recharge while welcoming clients who visited our office to seek Lord Ganesha’s blessings and interact with our team.
                </p>
              </div>

              {/* Day 7 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-mono font-black text-xs flex items-center justify-center shrink-0">
                    07
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Day 7: The Grand Visarjan, Auction, and Shoba Yatra
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium mb-4">
                  The most energetic day of all! We transitioned from the stage to the main hall for the famous Laddu Auction. The bidding went wild with participation from employees and clients alike:
                </p>

                <ul className="list-disc list-inside space-y-1.5 text-slate-900 text-base sm:text-lg font-semibold my-4 pl-4 bg-white p-4 rounded-xl border border-slate-200">
                  <li><strong className="text-sky-600">Big Laddu:</strong> Sold for ₹1,75,000 to Venkata Ramana.</li>
                  <li><strong className="text-indigo-600">Small Laddu:</strong> Sold for close to ₹11,000 to the Kavitha team.</li>
                </ul>

                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium mb-4">
                  After a traditional Telugu feast (Annaprasadam) for lunch, our Shoba Yatra procession kicked off at 5:00 PM. Filled with firecrackers, flowers, DJ music, and lights, the Visarjan (immersion) continued until 3:00 AM. What an unforgettable day to be part of Clyptus!
                </p>

                {/* Document Image 3 */}
                <div className="w-full text-center my-4">
                  <img
                    src="/blog-images/extracted_p3_1.jpeg"
                    alt="Grand Visarjan & Celebration Memories"
                    className="max-h-[500px] w-auto max-w-full h-auto object-contain mx-auto rounded-xl shadow-sm border border-slate-200"
                  />
                </div>
              </div>

              {/* Days 8 & 9 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    8-9
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Days 8 & 9: WFH and Lasting Memories
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                  The final two days were reserved for rest and remote work. The 2026 Vinayaka Chavithi celebrations at Clyptus Software Solutions will remain an unforgettable chapter for our entire team.
                </p>
              </div>

            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'sap-cloud-erp-2026',
      title: 'Future-Proofing Enterprise ERP with SAP S/4HANA Cloud in 2026',
      category: 'SAP Insights & Tech',
      categoryColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      author: 'Vamsi Krishna',
      authorRole: 'CEO & ERP Architect',
      date: 'October 2026',
      readTime: '6 min read',
      bannerImage: '/milestone_2023_2025.jpg',
      excerpt:
        'Enterprise resource planning is entering a new era driven by artificial intelligence and automated workflows. Discover how modern businesses are leveraging SAP S/4HANA Cloud to streamline supply chain management, financial intelligence, and real-time operational analytics across multi-regional deployments.',
      fullContent: (
        <div className="space-y-6 text-slate-800">
          <p className="text-lg text-slate-800 leading-relaxed font-medium">
            Modern enterprises face unprecedented complexity across supply chains, financial compliance, and multi-cloud infrastructure. Transitioning to SAP S/4HANA Cloud empowers organizations to unify data streams and deploy predictive AI models for real-time decision making.
          </p>
          <h3 className="text-xl font-bold text-slate-900">Key Pillars of 2026 Cloud Migration:</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium pl-4">
            <li>Automated Financial Reconciliation via Embedded Machine Learning</li>
            <li>Real-time Inventory Tracking across Global Warehouses</li>
            <li>Seamless Integration with Clean Core Architecture</li>
            <li>Zero Downtime Release & Continuous Feature Deployment</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ai-recruitment-strategies',
      title: 'AI-Powered Talent Acquisition: Transforming Technical Hiring at Clyptus',
      category: 'IT Recruitment',
      categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      author: 'Deepak Kasina',
      authorRole: 'HR Executive',
      date: 'August 2026',
      readTime: '4 min read',
      bannerImage: '/recruitment_3d_ai_talent.jpg',
      excerpt:
        'Finding top-tier SAP consultants, full-stack engineers, and cloud architects requires more than traditional resume screening. Learn how Clyptus uses AI-assisted candidate matching, deep skill verification, and fast-track onboarding to deliver elite tech talent in record time.',
      fullContent: (
        <div className="space-y-6 text-slate-800">
          <p className="text-lg text-slate-800 leading-relaxed font-medium">
            In today’s competitive talent landscape, speed and accuracy in technical hiring make all the difference. By combining AI skill-mapping models with personalized human evaluation, Clyptus accelerates candidate placement while ensuring cultural alignment.
          </p>
          <h3 className="text-xl font-bold text-slate-900">How Our Talent Engine Works:</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium pl-4">
            <li>AI-Driven Resume & Competency Analysis</li>
            <li>Automated Pre-Screening & Domain Code Evaluation</li>
            <li>Specialized SAP Module Skill Verification</li>
            <li>Dedicated Onboarding & Placement Support</li>
          </ul>
        </div>
      ),
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.author.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full bg-slate-50 text-slate-900 font-sans selection:bg-sky-500/20 selection:text-sky-800 min-h-screen pb-20">
      
      {/* ---------------------------------------------------- */}
      {/* HERO HEADER                                          */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full pt-14 pb-14 sm:pt-20 sm:pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/80 text-slate-900 select-none">
        {/* Soft Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 shadow-xs mb-6">
            <Sparkles className="w-4 h-4 text-sky-600 animate-pulse" />
            <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-sky-700">
              CLYPTUS CULTURE & BLOG PERSPECTIVES
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 mb-6 max-w-4xl">
            Insights, Stories & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600">Company Culture</span>
          </h1>

          <p className="text-base sm:text-xl font-medium text-slate-600 max-w-3xl leading-relaxed mb-8">
            Explore our latest stories, event highlights, tech insights, and workplace culture updates at Clyptus Software Solutions.
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search blog stories, topics, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/90 border border-slate-300 rounded-full text-sm font-medium text-slate-800 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* BLOG CARDS GRID SECTION                               */}
      {/* ---------------------------------------------------- */}
      <main className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedBlog(post)}
              className="group cursor-pointer bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Image Banner */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={post.bannerImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Meta Details */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* PREVIEW EXCERPT - STRICTLY DISPLAY 4 LINES OF TEXT */}
                  <p
                    className="text-sm text-slate-600 font-medium leading-relaxed mb-6"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Meta & Open Card Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sky-700 font-bold text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-tight">{post.author}</p>
                      <p className="text-[10px] text-slate-400 font-mono">{post.authorRole}</p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBlog(post);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-sky-600 group-hover:text-sky-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            <p className="text-lg font-semibold mb-2">No blog posts found matching "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-5 py-2 rounded-full bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition-all"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      {/* ---------------------------------------------------- */}
      {/* FULL MATTER ARTICLE READER MODAL                     */}
      {/* ---------------------------------------------------- */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col border border-slate-200 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold uppercase ${selectedBlog.categoryColor}`}>
                  {selectedBlog.category}
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">•</span>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline">{selectedBlog.date}</span>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
                title="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Article Content ("The Whole Matter") */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              {/* Article Header */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {selectedBlog.title}
                </h1>

                {/* Author Info Bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 p-3.5 rounded-2xl">
                  <span className="flex items-center gap-1.5 text-sky-700 font-bold">
                    <UserCheck className="w-4 h-4" />
                    By {selectedBlog.author} ({selectedBlog.authorRole})
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Calendar className="w-4 h-4" />
                    {selectedBlog.date}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    {selectedBlog.readTime}
                  </span>
                </div>
              </div>

              {/* Full Article Content */}
              <div className="prose prose-slate max-w-none">
                {selectedBlog.fullContent}
              </div>

              {/* Author Footer Section */}
              <div className="mt-12 pt-8 border-t border-slate-200 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl">
                <div>
                  <span className="text-xs font-mono font-extrabold text-sky-600 uppercase tracking-widest block mb-1">
                    ABOUT THE AUTHOR
                  </span>
                  <h4 className="text-xl font-black text-slate-900 mb-0.5">
                    Written by {selectedBlog.author}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider mb-2">
                    {selectedBlog.authorRole} at Clyptus Software Solutions
                  </p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
                    Deepak manages recruitment operations, talent acquisition, and employee engagement initiatives at Clyptus Software Solutions.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedBlog(null);
                    if (onNavigateContact) onNavigateContact();
                  }}
                  className="group shrink-0 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Connect with HR Team →</span>
                </button>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <span className="text-xs font-mono text-slate-500">
                Clyptus Blog Perspective
              </span>
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default BlogsPage;

