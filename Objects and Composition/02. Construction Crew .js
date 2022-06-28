function constructionCrew(worker) {
    if (worker.dizziness) {
        worker.leveOfHydrated += 0.1 * worker.wieght * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}