import { PageHeader } from '@/components/PageHeader';
import { Panel } from '@/components/Panel';
import { getHealth } from '@/lib/api';
import { formatDuration } from '@/lib/format';

export const metadata = { title: 'Overview' };

export default async function OverviewPage() {
  const health = await getHealth();

  return (
    <>
      <PageHeader
        title="Overview"
        subline={health.ok ? `The API has been up for ${formatDuration(health.data.uptimeSeconds)}.` : health.error}
      />
      <Panel title="API">
        {health.ok ? 'Reachable, database up.' : 'Not reachable. Start hookrelay and check HOOKRELAY_API_URL.'}
      </Panel>
    </>
  );
}
