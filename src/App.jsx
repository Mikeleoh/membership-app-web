import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

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

const recentActivity = [
  { text: 'Alicia Gomez upgraded to Premium', time: '2 hours ago' },
  { text: 'Invoice #4028 was paid successfully', time: '5 hours ago' },
  { text: 'Marcus Lee started a 7-day trial', time: '1 day ago' },
  { text: 'New team invite sent to Horizon Studio', time: '2 days ago' },
];

const billingSummary = [
  { label: 'Collected', value: '$24,820', tone: 'positive' },
  { label: 'Pending', value: '$3,140', tone: 'neutral' },
  { label: 'Refunds', value: '$420', tone: 'warning' },
];

const focusAreas = [
  { title: 'Member retention', value: '92%', detail: '+6.2% from last month' },
  { title: 'Conversion rate', value: '14.8%', detail: '+1.9% this cycle' },
  { title: 'Avg. plan value', value: '$88', detail: '+$7.3 compared to Q1' },
];

const navItems = [
  { name: 'Overview', path: '/' },
  { name: 'Members', path: '/members' },
  { name: 'Plans', path: '/plans' },
  { name: 'Billing', path: '/billing' },
  { name: 'Reports', path: '/reports' },
  { name: 'Settings', path: '/settings' },
];

function AppShell({ children }) {
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
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-card">
          <p className="eyebrow">Current season</p>
          <h3>Growth campaign</h3>
          <span>72% target reached</span>
        </div>
      </aside>

      <main className="main-panel">{children}</main>
    </div>
  );
}

function DashboardPage() {
  return (
    <>
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
            {recentActivity.map((item) => (
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
    </>
  );
}

function MembersPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Directory</p>
          <h2>Members</h2>
        </div>
        <button className="primary-button">New member</button>
      </header>

      <section className="panel stacked-panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Roster</p>
            <h3>All members</h3>
          </div>
          <button className="ghost-button small">Filter</button>
        </div>

        <div className="member-grid">
          {members.map((member) => (
            <div key={member.name} className="member-card">
              <div className="avatar">{member.name.split(' ').map((part) => part[0]).slice(0,2).join('')}</div>
              <h4>{member.name}</h4>
              <p>{member.plan}</p>
              <div className="member-meta">
                <span>{member.status}</span>
                <strong>{member.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function PlansPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Membership</p>
          <h2>Plans</h2>
        </div>
        <button className="primary-button">Create plan</button>
      </header>

      <section className="plan-page-grid">
        {plans.map((plan) => (
          <div className="panel plan-panel" key={plan.name}>
            <div className="plan-page-top">
              <div>
                <p className="eyebrow">Tier</p>
                <h3>{plan.name}</h3>
              </div>
              <strong>{plan.price}</strong>
            </div>
            <p className="plan-page-copy">{plan.description}</p>
            <ul className="feature-list">
              <li>Priority support</li>
              <li>Advanced analytics</li>
              <li>Access to premium resources</li>
            </ul>
            <div className="plan-footer">
              <span>{plan.members} active members</span>
              <button className="ghost-button small">Edit</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function BillingPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Finance</p>
          <h2>Billing</h2>
        </div>
        <button className="primary-button">Run report</button>
      </header>

      <section className="stats-grid billing-grid">
        {billingSummary.map((item) => (
          <article key={item.label} className="stat-card billing-card">
            <p>{item.label}</p>
            <h3>{item.value}</h3>
            <span className={`mini-tag ${item.tone}`}>{item.tone === 'positive' ? 'Healthy' : item.tone === 'neutral' ? 'Review' : 'Watch'}</span>
          </article>
        ))}
      </section>

      <section className="panel stacked-panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Payments</p>
            <h3>Latest invoices</h3>
          </div>
        </div>

        <div className="invoice-list">
          <div className="invoice-row">
            <span>#4028</span>
            <span>Alicia Gomez</span>
            <span>Premium</span>
            <span>$79</span>
            <span className="payment-success">Paid</span>
          </div>
          <div className="invoice-row">
            <span>#4027</span>
            <span>Damian Cole</span>
            <span>Business</span>
            <span>$149</span>
            <span className="payment-pending">Pending</span>
          </div>
          <div className="invoice-row">
            <span>#4026</span>
            <span>Oscar Nguyen</span>
            <span>VIP</span>
            <span>$199</span>
            <span className="payment-success">Paid</span>
          </div>
        </div>
      </section>
    </>
  );
}

function ReportsPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">Insights</p>
          <h2>Reports</h2>
        </div>
      </header>

      <section className="stats-grid">
        {focusAreas.map((item) => (
          <article key={item.title} className="stat-card report-card">
            <p>{item.title}</p>
            <h3>{item.value}</h3>
            <small>{item.detail}</small>
          </article>
        ))}
      </section>
    </>
  );
}

function SettingsPage() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">System</p>
          <h2>Settings</h2>
        </div>
      </header>

      <section className="panel stacked-panel">
        <div className="settings-list">
          <div className="setting-row">
            <div>
              <h4>Membership automation</h4>
              <p>Send welcome emails and renewal reminders automatically.</p>
            </div>
            <button className="ghost-button small">Enabled</button>
          </div>
          <div className="setting-row">
            <div>
              <h4>Billing sync</h4>
              <p>Keep Stripe and payment history in sync every 15 minutes.</p>
            </div>
            <button className="ghost-button small">Sync</button>
          </div>
          <div className="setting-row">
            <div>
              <h4>Access control</h4>
              <p>Manage permissions for admins and team managers.</p>
            </div>
            <button className="ghost-button small">Manage</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
