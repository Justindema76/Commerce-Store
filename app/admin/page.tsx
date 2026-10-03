const metrics=[["Products","24"],["Active Rentals","6"],["Orders","18"],["Revenue","$2,840"]];
export default function Admin(){
 return <main className="admin-shell">
  <aside className="admin-sidebar"><div className="admin-brand"><span>JC</span><div><strong>Commerce Admin</strong><small>Standalone Store</small></div></div><nav>{["Dashboard","Products","Categories","Inventory","Rentals","Orders","Customers","Settings"].map((x,i)=><button className={i===0?"active":""} key={x}>{x}</button>)}</nav><div className="admin-note">Built independently from Sunwings, Wheels and JustConsignIn.</div></aside>
  <section className="admin-main"><header><div><span className="eyebrow">Commerce Store</span><h1>Dashboard</h1></div><a href="/">View Store ↗</a></header><div className="admin-content">
   <div className="admin-hero"><div><span>Store overview</span><h2>Your commerce operation at a glance.</h2><p>Products, rentals, inventory and orders are designed to live here as one standalone system.</p></div><button>Add Product</button></div>
   <div className="metric-grid">{metrics.map(([a,b])=><article key={a}><span>{a}</span><strong>{b}</strong></article>)}</div>
   <div className="admin-grid"><article className="admin-panel"><div className="panel-title"><h3>Recent products</h3><button>View all</button></div>{["Moving Tote Rental Pack","Vintage Leafs Jersey","LEGO Collector Set"].map((p,i)=><div className="row" key={p}><div><strong>{p}</strong><small>{i===0?"Rental":"Physical product"}</small></div><span>{i===1?"Low stock":"Active"}</span></div>)}</article>
   <article className="admin-panel"><div className="panel-title"><h3>Commerce foundation</h3></div><ul className="checklist"><li>Product catalogue</li><li>Rental-ready product model</li><li>Inventory structure</li><li>Orders and customers</li><li>Payments and shipping next</li></ul></article></div>
  </div></section>
 </main>
}
