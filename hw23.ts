enum Positions {
  boss = 'Vasia',
  hrManager = 'Zina',
  sales = 'Akakiy',
}

interface IPositionSalary {
  position: Positions;
  salary: number;
}

class ClassMate {
  constructor(private schoolName: string, private position: Positions, private salary: number) {}

  getPositionSalary(): IPositionSalary {
    return {
      position: this.position,
      salary: this.salary,
    };
  }

  getSchoolName(): string {
    return this.schoolName;
  }
}
