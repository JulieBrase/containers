
import Team from './Team';

describe('Team', () => {
    let team;
    const character1 = { name: 'Hero' };
    const character2 = { name: 'Villain' };

    beforeEach(() => {
        team = new Team();
    });

    test('should add a character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('should not add the same character twice', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Character is already in the team');
    });

    test('should add multiple characters with addAll', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
    });

    test('should not add duplicates with addAll', () => {
        team.add(character1);
        team.addAll(character1, character2);
        expect(team.toArray()).toEqual(expect.arrayContaining([character1, character2]));
    });

    test('should convert to array correctly', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });
});

import ErrorRepository from './src/ErrorRepository';

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('should return the correct error message for a known error code', () => {
        expect(errorRepo.translate(404)).toBe('Not Found');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
        expect(errorRepo.translate(403)).toBe('Forbidden');
    });

    test('should return "Unknown error" for an unknown error code', () => {
        expect(errorRepo.translate(999)).toBe('Unknown error');
    });
});
