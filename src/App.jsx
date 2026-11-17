const stats = [
  { label: 'Total members', value: '8,420', change: '+12.4%', trend: 'up' },
  { label: 'Active plans', value: '1,286', change: '+8.1%', trend: 'up' },
  { label: 'Monthly revenue', value: '$54.2K', change: '+5.7%', trend: 'up' },
  { label: 'Renewals due', value: '142', change: '-3.2%', trend: 'down' },
];

const members = [
  { name: 'Alicia Gomez', plan: 'Premium', status: 'Active', renewal: 'Dec 18', value: '$79' },
  { name: 'Marcus Lee', plan: 'Standard', status: 'Trial', renewal: 'Dec 22', value: '$39' },
  { name: 'Nina Patel', plan: 'Premium', status: 'Active', renewal: 'Dec 25', value: '$79' },
  { name: 'Damian Cole', plan: 'Business', status: 'Past due', renewal: 'Dec 09', value: '$149' },
  { name: 'Sara Brown', plan: 'Standard', status: 'Active', renewal: 'Dec 17', value: '$39' },
  { name: 'Oscar Nguyen', plan: 'VIP', status: 'Active', renewal: 'Dec 29', value: '$199' },
];

const plans = [
  { name: 'Standard', price: '$39', members: '3,420', description: 'Core access' },
  { name: 'Premium', price: '$79', members: '2,146', description: 'Priority perks' },
  { name: 'Business', price: '$149', members: '540', description: 'Team tools' },
  { name: 'VIP', price: '$199', members: '184', description: 'Exclusive lounge' },
];

const activity = [
  { text: 'Alicia Gomez upgraded to Premium', time: '2 hours ago' },
  { text: 'Invoice #4028 was paid successfully', time: '5 hours ago' },
  { text: 'Marcus Lee started a 7-day trial', time: '1 day ago' },
  { text: 'New team invite sent to Horizon Studio', time: '2 days ago' },
];

const sidebarItems = ['Overview', 'Members', 'Plans', 'Billing', 'Reports', 'Settings'];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">M</div>
          <div>
            <p className="eyebrow">Platform</p>
            <h1>MemberFlow</h1>
          </div>
        </div>

        <nav className="nav">
          {sidebarItems.map((item, index) => (
            <button key={item} className={index === 0 ? 'nav-item active' : 'nav-item'}>
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <p className="eyebrow">Current season</p>
          <h3>Growth campaign</h3>
          <span>72% target reached</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h2>Admin dashboard</h2>
          </div>

          <div className="topbar-actions">
            <button className="ghost-button">Export</button>
            <button className="primary-button">Add member</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p>{stat.label}</p>
              <div className="stat-row">
                <h3>{stat.value}</h3>
                <span className={stat.trend === 'up' ? 'trend up' : 'trend down'}>{stat.change}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel panel-wide">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Members</p>
                <h3>Members overview</h3>
              </div>
              <button className="ghost-button small">View all</button>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Renewal</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member.name}>
                      <td>{member.name}</td>
                      <td>{member.plan}</td>
                      <td>
                        <span className={`badge ${member.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {member.status}
                        </span>
                      </td>
                      <td>{member.renewal}</td>
                      <td>{member.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Quick actions</p>
                <h3>Tasks</h3>
              </div>
            </div>

            <div className="action-list">
              <button className="action-item">Issue welcome email</button>
              <button className="action-item">Review pending invoices</button>
              <button className="action-item">Sync payment gateway</button>
              <button className="action-item">Create membership campaign</button>
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Plans</p>
                <h3>Membership tiers</h3>
              </div>
            </div>

            <div className="plan-list">
              {plans.map((plan) => (
                <div key={plan.name} className="plan-card">
                  <div className="plan-topline">
                    <span>{plan.name}</span>
                    <strong>{plan.price}</strong>
                  </div>
                  <p>{plan.description}</p>
                  <small>{plan.members} members</small>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Activity</p>
                <h3>Recent updates</h3>
              </div>
            </div>

            <ul className="activity-list">
              {activity.map((item) => (
                <li key={item.text}>
                  <div className="dot" />
                  <div>
                    <p>{item.text}</p>
                    <small>{item.time}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
