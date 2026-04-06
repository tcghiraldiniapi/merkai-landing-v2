import Link from 'next/link'
export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">Merk</span>
                <span className="text-white">ai</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Estruturação de operações comerciais com tráfego, automação e IA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-3">Navegação</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#problema" className="hover:text-foreground transition-colors">Problema</Link></li>
                <li><Link href="#servico" className="hover:text-foreground transition-colors">Solução</Link></li>
                <li><Link href="#prova-social" className="hover:text-foreground transition-colors">Resultados</Link></li>
                <li><Link href="#oferta" className="hover:text-foreground transition-colors">Oferta</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>thiago@merkai.com.br</li>
                <li>Reunião comercial por agendamento</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Merkai. CNPJ 53.363.840/0001-85. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
