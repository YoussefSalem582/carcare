import { ProtoProvider } from './context/ProtoContext';
import { ProtoShell } from './shell/ProtoShell';

export default function App() {
  return (
    <ProtoProvider>
      <ProtoShell />
    </ProtoProvider>
  );
}
