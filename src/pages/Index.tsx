import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const technologies = [
    { name: "Selenium", icon: "Code2", color: "bg-primary" },
    { name: "Postman", icon: "Send", color: "bg-secondary" },
    { name: "Jira", icon: "ListChecks", color: "bg-accent" },
    { name: "Git", icon: "GitBranch", color: "bg-primary" },
    { name: "SQL", icon: "Database", color: "bg-secondary" },
    { name: "Jenkins", icon: "Workflow", color: "bg-accent" },
  ];

  const requirements = [
    { text: "Опыт тестирования ПО от 2 лет", icon: "CheckCircle2" },
    { text: "Знание методологий тестирования", icon: "BookOpen" },
    { text: "Английский язык: Intermediate+", icon: "Languages" },
    { text: "Аналитическое мышление", icon: "Brain" },
    { text: "Внимание к деталям", icon: "Eye" },
  ];

  const responsibilities = [
    "Проведение функционального и регрессионного тестирования",
    "Создание и поддержка тест-кейсов и чек-листов",
    "Автоматизация тестовых сценариев",
    "Анализ требований и документации",
    "Взаимодействие с командой разработки",
    "Отчетность по найденным дефектам",
  ];

  const universities = [
    { name: "МГУ", program: "Прикладная математика и информатика" },
    { name: "МФТИ", program: "Программная инженерия" },
    { name: "НИУ ВШЭ", program: "Прикладная математика" },
    { name: "СПбГУ", program: "Программирование" },
    { name: "ИТМО", program: "Информационные системы" },
  ];

  const myths = [
    {
      myth: "QA — это скучная работа",
      fact: "QA-инженер работает с новейшими технологиями и участвует в создании инновационных продуктов",
    },
    {
      myth: "Тестировщик просто нажимает кнопки",
      fact: "QA требует глубоких технических знаний, аналитики и креативности в поиске багов",
    },
    {
      myth: "Автоматизация заменит тестировщиков",
      fact: "Автоматизация — инструмент QA-инженера. Человеческий анализ незаменим для оценки UX и edge cases",
    },
    {
      myth: "QA не нужно знать программирование",
      fact: "Современный QA владеет языками программирования для автоматизации и работы с API",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative">
        <section className="container mx-auto px-4 py-20 animate-fade-in">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 text-base px-6 py-2 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
              Открыта вакансия
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              QA-инженер
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Присоединяйся к команде профессионалов и создавай качественное программное обеспечение
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Card className="px-6 py-4 hover:shadow-lg transition-shadow border-2 border-primary/20 bg-white/80 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Icon name="DollarSign" className="text-primary" size={24} />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Зарплата</div>
                    <div className="text-xl font-bold">150 000 - 250 000 ₽</div>
                  </div>
                </div>
              </Card>
              
              <Card className="px-6 py-4 hover:shadow-lg transition-shadow border-2 border-secondary/20 bg-white/80 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-secondary" size={24} />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Формат</div>
                    <div className="text-xl font-bold">Удаленная работа</div>
                  </div>
                </div>
              </Card>
              
              <Card className="px-6 py-4 hover:shadow-lg transition-shadow border-2 border-accent/20 bg-white/80 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Icon name="Briefcase" className="text-accent" size={24} />
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Занятость</div>
                    <div className="text-xl font-bold">Полная</div>
                  </div>
                </div>
              </Card>
            </div>

            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-lg">
              <Icon name="Send" className="mr-2" size={20} />
              Откликнуться на вакансию
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Требования к кандидату
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/50 bg-white/80 backdrop-blur animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Icon name={req.icon} className="text-primary" size={28} />
                    </div>
                    <p className="text-lg pt-2">{req.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Должностные обязанности
            </h2>
            
            <Card className="p-8 bg-white/80 backdrop-blur border-2">
              <ul className="space-y-4">
                {responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-4 text-lg">
                    <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Технологии и инструменты
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              С чем предстоит работать
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <Card
                  key={index}
                  className="p-8 text-center hover:shadow-2xl transition-all hover:scale-105 cursor-pointer bg-white/80 backdrop-blur border-2 hover:border-primary/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${tech.color} flex items-center justify-center`}>
                    <Icon name={tech.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Образование
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Вузы и направления подготовки
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {universities.map((uni, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 bg-white/80 backdrop-blur border-2 hover:border-secondary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10">
                      <Icon name="GraduationCap" className="text-secondary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                      <p className="text-muted-foreground">{uni.program}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Мифы и факты о профессии
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Развеиваем популярные заблуждения
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {myths.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                    <div className="flex items-center gap-3">
                      <Icon name="AlertCircle" className="text-destructive flex-shrink-0" size={24} />
                      <span className="text-left">{item.myth}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base pb-6">
                    <div className="flex items-start gap-3 bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-xl">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={24} />
                      <p>{item.fact}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary via-secondary to-accent">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готов стать частью команды?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Отправь резюме и начни карьеру в области Quality Assurance
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform shadow-2xl"
            >
              <Icon name="Mail" className="mr-2" size={20} />
              Отправить резюме
            </Button>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 Вакансия QA-инженер. Все права защищены.</p>
        </footer>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default Index;
