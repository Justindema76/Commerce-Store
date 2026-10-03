const products=[
  {name:"Vintage Maple Leafs Jersey",price:"$120",tag:"Collectibles",image:"https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80"},
  {name:"LEGO Collector Set",price:"$80",tag:"Collectibles",image:"https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80"},
  {name:"Moving Tote Rental Pack",price:"From $60 / week",tag:"Rentals",image:"https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80"},
  {name:"Premium Hockey Gear",price:"$150",tag:"Sports",image:"https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1200&q=80"}
];

export default function Home(){
 return <main>
  <header className="site-header">
    <div className="announcement">Local Hamilton pickup • Rentals • Shipping-ready commerce</div>
    <div className="nav-wrap">
      <a className="brand" href="#"><span className="brand-mark">J</span><span>Justin's Commerce</span></a>
      <nav><a href="#shop">Shop</a><a href="#rentals">Rentals</a><a href="#about">About</a></nav>
      <div className="nav-actions"><button className="icon-btn">Search</button><button className="cart-btn">Cart <span>0</span></button></div>
    </div>
  </header>

  <section className="hero">
    <div className="hero-copy">
      <span className="eyebrow">Independent commerce. Built your way.</span>
      <h1>Good stuff.<br/>Fair prices.<br/><em>No nonsense.</em></h1>
      <p>A flexible local storefront for products, collectibles, sports gear and rentals—built to grow into a full commerce platform.</p>
      <div className="hero-actions"><a className="primary" href="#shop">Shop products</a><a className="secondary" href="#rentals">View rentals</a></div>
      <div className="trust-row"><span>Local pickup</span><span>Secure checkout ready</span><span>Rental friendly</span></div>
    </div>
    <div className="hero-card">
      <div className="hero-photo"></div>
      <div className="hero-card-copy"><span>Featured rental</span><strong>Reusable moving totes</strong><p>Rent. Move. Return.</p></div>
    </div>
  </section>

  <section className="category-strip">
    <div><strong>Collectibles</strong><span>LEGO, figures & more</span></div>
    <div><strong>Sports</strong><span>Hockey, golf & gear</span></div>
    <div><strong>Rentals</strong><span>Reusable moving totes</span></div>
    <div><strong>Local Finds</strong><span>One-off inventory</span></div>
  </section>

  <section className="section" id="shop">
    <div className="section-head"><div><span className="eyebrow">Shop</span><h2>Featured products</h2></div><a href="#">View all products →</a></div>
    <div className="product-grid">
      {products.map((p,i)=><article className="product-card" key={p.name}>
        <div className="product-image" style={{backgroundImage:`url(${p.image})`}}><span>{p.tag}</span>{i===2&&<b>Rental</b>}</div>
        <div className="product-info"><small>{p.tag}</small><h3>{p.name}</h3><strong>{p.price}</strong><button>View product</button></div>
      </article>)}
    </div>
  </section>

  <section className="rental-section" id="rentals">
    <div className="rental-copy"><span className="eyebrow light">Rentals</span><h2>Stop buying boxes you'll throw away.</h2><p>Reusable moving totes delivered locally, rented by the week, and returned when the move is done.</p><ul><li>Choose your tote package</li><li>Select rental period</li><li>Local delivery or pickup</li><li>Return when finished</li></ul><a className="light-btn" href="#">Explore rentals</a></div>
    <div className="rental-visual"><div className="stack-card"><span>25 Tote Pack</span><strong>$60</strong><small>7-day rental</small></div><div className="stack-card offset"><span>50 Tote Pack</span><strong>$100</strong><small>7-day rental</small></div></div>
  </section>

  <section className="section promise" id="about">
    <div><span className="eyebrow">Built differently</span><h2>One store now.<br/>A commerce engine later.</h2></div>
    <div className="promise-grid"><article><strong>01</strong><h3>Products</h3><p>Physical goods, one-off inventory, collectibles and resale items.</p></article><article><strong>02</strong><h3>Rentals</h3><p>Date-based inventory for reusable products and equipment.</p></article><article><strong>03</strong><h3>Growth</h3><p>Built to add payments, shipping, integrations and multiple storefronts later.</p></article></div>
  </section>

  <footer><div><strong>Justin's Commerce</strong><p>Hamilton, Ontario</p></div><div><a href="#shop">Shop</a><a href="#rentals">Rentals</a><a href="#">Contact</a></div><small>Commerce platform foundation • 2026</small></footer>
 </main>
}
